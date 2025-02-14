"use client"

import { Children, useEffect, useRef, useState } from "react";
import Button from "./Button";
import Image from "next/image";
import leftArrow from "public/images/icons/left.png";
import rightArrow from "public/images/icons/right1.png";

interface CarouselProps extends React.HTMLProps<HTMLDivElement> {
    id: string;
    isAutoPlay?: boolean;
    showArrows?: boolean;
}

export function Carousel({ className = '', children, id, isAutoPlay = true, showArrows, ...rest }: CarouselProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const itemsLength = Children.count(children);
    const isFirstActive = activeIndex === 0;
    const isLastActive = activeIndex === itemsLength - 1;
    const autoPlayIntervalId = useRef<any>(null);
    const triggerAutoPlayStart = useRef(isAutoPlay);
    const clearAutoPlayInterval = () => clearInterval(autoPlayIntervalId.current);

    const scrollToIndex = (index: number) => {
        const carousel = document.getElementById(id);
        if (carousel) {
            const left = (carousel?.childNodes[index] as HTMLElement)?.offsetLeft;
            carousel.scrollTo({ left: left, behavior: 'instant' });
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        if (triggerAutoPlayStart.current) {
            if (autoPlayIntervalId.current) clearAutoPlayInterval();
            autoPlayIntervalId.current = setInterval(() => {
                scrollToIndex(isLastActive ? 0 : activeIndex + 1)
            }, 4000);
            triggerAutoPlayStart.current = false;
        }
        return clearAutoPlayInterval;
    }, [triggerAutoPlayStart, activeIndex]);

    return (
        <div className={`relative w-full ${className}`}>
            <div
                {...rest}
                id={id}
                className="carousel relative w-full"
            >
                {Children.map(children, (child) =>
                    <div className='carousel-item w-full'>
                        {child}
                    </div>)}
            </div>
            <div
                className="absolute right-0"
            >
                <Button
                    id='scroll-back'
                    onClick={() => {
                        scrollToIndex(isFirstActive ? itemsLength - 1 : activeIndex - 1);
                        triggerAutoPlayStart.current = true;
                    }}
                    className={`bg-white hover:bg-white border-none shadow-none btn-circle btn-md`}
                >
                    <Image src={leftArrow} alt='left arrow' />
                </Button>
                <Button
                    id='scroll-forward'
                    onClick={() => {
                        scrollToIndex(isLastActive ? 0 : activeIndex + 1);
                        triggerAutoPlayStart.current = true;
                    }}
                    className={`bg-white hover:bg-white border-none shadow-none btn-circle btn-md`}
                >
                    <Image src={rightArrow} alt='right arrow' />
                </Button>
            </div>
        </div>
    )
}
