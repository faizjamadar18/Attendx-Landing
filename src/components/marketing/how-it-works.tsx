import React from 'react'
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Image from "next/image";

const HowItWorks = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col lg:flex-row items-start justify-start lg:items-end lg:justify-between px-2 md:px-0">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-start tracking-tight">
                            Teacher's Workflow
                            {/* <br /> notebook solution today */}
                        </h2>
                        <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-start mt-4 lg:mt-0 max-w-md">
                            Experience the power of AttendX with our easy-to-use AI solution. Get started in minutes
                        </p>
                    </div>
                </Container>

                <Container delay={0.1}>
                    <div className="flex flex-col gap-y-8 mt-10 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
                            <div className="flex flex-col p-6 lg:p-8 h-full">
                                <div className="flex items-center justify-between w-full">
                                    <Image
                                        src="/images/hiw01.svg"
                                        alt="01"
                                        width={1024}
                                        height={1024}
                                        className="w-10 lg:w-14 h-auto"
                                    />
                                    <span className="text-xl lg:text-2xl font-semibold text-neutral-700">
                                        01
                                    </span>

                                </div>
                                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                                    <h4 className="text-xl lg:text-2xl font-medium">
                                        Secure Login
                                    </h4>
                                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                                        Start your session with our high-security authentication portal. Your data is encrypted and synced across all your devices.
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="w-full border border-border/50 rounded-lg">
                                    <Image
                                        src="/images/hiw01.png"
                                        alt="01"
                                        width={1024}
                                        height={1024}
                                        className="size-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
                            <div className="flex w-full">
                                <div className="w-full border border-border/50 rounded-lg">
                                    <Image
                                        src="/images/hiw02.png"
                                        alt="02"
                                        width={1024}
                                        height={1024}
                                        className="size-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col p-6 lg:p-8 h-full">
                                <div className="flex items-center justify-between w-full">
                                    <Image
                                        src="/images/hiw02.svg"
                                        alt="02"
                                        width={1024}
                                        height={1024}
                                        className="w-10 lg:w-14 h-auto"
                                    />
                                    <span className="text-xl lg:text-2xl font-semibold text-neutral-700">
                                        02
                                    </span>
                                </div>
                                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                                    <h4 className="text-xl lg:text-2xl font-medium">
                                        Interactive Dashboard
                                    </h4>
                                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                                        Manage all your subjects, attendance logs, and student rosters from a single, beautiful unified stream.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
                            <div className="flex flex-col p-6 lg:p-8 h-full">
                                <div className="flex items-center justify-between w-full">
                                    <Image
                                        src="/images/hiw03.svg"
                                        alt="03"
                                        width={1024}
                                        height={1024}
                                        className="w-10 lg:w-14 h-auto"
                                    />
                                    <span className="text-xl lg:text-2xl font-semibold text-neutral-700">
                                        03
                                    </span>
                                </div>
                                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                                    <h4 className="text-xl lg:text-2xl font-medium">
                                        Course Management
                                    </h4>
                                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                                        Course codes generate unique QR codes for instant student enrollment. No more manual entry or data management headaches.
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="w-full border border-border/50 rounded-lg">
                                    <Image
                                        src="/images/hiw04.png"
                                        alt="03"
                                        width={1024}
                                        height={1024}
                                        className="size-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
                            <div className="flex w-full">
                                <div className="w-full border border-border/50 rounded-lg">
                                    <Image
                                        src="/images/hiw07.png"
                                        alt="02"
                                        width={1024}
                                        height={1024}
                                        className="size-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col p-6 lg:p-8 h-full">
                                <div className="flex items-center justify-between w-full">
                                    <Image
                                        src="/images/hiw02.svg"
                                        alt="02"
                                        width={1024}
                                        height={1024}
                                        className="w-10 lg:w-14 h-auto"
                                    />
                                    <span className="text-xl lg:text-2xl font-semibold text-neutral-700">
                                        04
                                    </span>
                                </div>
                                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                                    <h4 className="text-xl lg:text-2xl font-medium">
                                        FaceID Attendance
                                    </h4>
                                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                                        Use high-speed computer vision to scan the entire room. Our AI identifies every student from a single class photo in milliseconds.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
                            <div className="flex flex-col p-6 lg:p-8 h-full">
                                <div className="flex items-center justify-between w-full">
                                    <Image
                                        src="/images/hiw01.svg"
                                        alt="01"
                                        width={1024}
                                        height={1024}
                                        className="w-10 lg:w-14 h-auto"
                                    />
                                    <span className="text-xl lg:text-2xl font-semibold text-neutral-700">
                                        05
                                    </span>
                                </div>
                                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                                    <h4 className="text-xl lg:text-2xl font-medium">
                                        Voice ID Attendance

                                    </h4>
                                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                                        Switch to voice mode for a futuristic roll-call. Students speak sequentially, and our AI matches their unique voice signatures.
                                    </p>
                                </div>
                            </div>
                            <div className="flex w-full">
                                <div className="w-full border border-border/50 rounded-lg">
                                    <Image
                                        src="/images/hiw05.png"
                                        alt="01"
                                        width={1024}
                                        height={1024}
                                        className="size-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
                            <div className="flex w-full">
                                <div className="w-full border border-border/50 rounded-lg">
                                    <Image
                                        src="/images/hiw06.png"
                                        alt="02"
                                        width={1024}
                                        height={1024}
                                        className="size-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col p-6 lg:p-8 h-full">
                                <div className="flex items-center justify-between w-full">
                                    <Image
                                        src="/images/hiw02.svg"
                                        alt="02"
                                        width={1024}
                                        height={1024}
                                        className="w-10 lg:w-14 h-auto"
                                    />
                                    <span className="text-xl lg:text-2xl font-semibold text-neutral-700">
                                        06
                                    </span>
                                </div>
                                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                                    <h4 className="text-xl lg:text-2xl font-medium">
                                        Actionable Records
                                    </h4>
                                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                                        Review and manage historical logs. View confidence scores, download CSV reports, and track long-term attendance trends.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </Wrapper>
        </div>
    )
};

export default HowItWorks
