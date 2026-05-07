import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export const CONTACT_CARDS = [
    {
        title: "Phone Number",
        value: "+1 (123) 456-7890",
        icon: PhoneIcon
    },
    {
        title: "AttendX Address",
        value: "Mumbai, India",
        icon: MapPinIcon
    },
    {
        title: "Email Address",
        value: "support@AttendX.com",
        icon: MailIcon
    }
] as const;
