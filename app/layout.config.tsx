import type {BaseLayoutProps} from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <>
                <img src={"/code0_logo.png"} alt={"Code0 Logo"} width={24}/>
                Code0
            </>
        ),
    },
    links: [],
};
