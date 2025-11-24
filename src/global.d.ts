/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare const particlesJS: {
        load: (tagId: string, path: string, callback?: () => void) => void;
};
