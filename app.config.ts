export default defineAppConfig({
    ui: {
        avatar: {
            size: {
                "3xs": "h-4 w-4 text-[8px]",
                "2xs": "h-5 w-5 text-[10px]",
                "xs": "h-6 w-6 text-xs",
                "sm": "h-8 w-8 text-sm",
                "md": "h-10 w-10 text-base",
                "lg": "h-12 w-12 text-lg",
                "xl": "h-14 w-14 text-xl",
                "2xl": "h-16 w-16 text-2xl",
                "3xl": "h-20 w-20 text-3xl",
                "4xl": "h-24 w-24 text-4xl",
                "5xl": "h-28 w-28 text-5xl",
                "6xl": "h-32 w-32 text-6xl object-cover",
            },
        },
        input: {
            rounded: 'border rounded',
            default: {
                variant: "none",
            },
        },
        select: {
            rounded: 'border rounded',
            default: {
                variant: "none",
            },
        },
    },
})
