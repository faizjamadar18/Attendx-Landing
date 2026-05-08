import { Metadata } from "next";

export const generateMetadata = ({
    title = `AttendX `,
    description = `For Smarter Classrooms`,
    image = "/thumbnail.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/images/logo2.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/images/logo2.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    ...(noIndex && { robots: { index: false, follow: false } }),
});
