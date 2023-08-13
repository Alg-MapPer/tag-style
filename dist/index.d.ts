type HighlightOptions = {
    links?: boolean;
    mentions?: boolean;
    hashtags?: boolean;
};
type HighlightKeywordsOptions = {
    keywords?: string[];
};
export declare class TagStyle {
    static highlight(text: string, { links, mentions, hashtags }: HighlightOptions): string;
    static highlightKeywords(text: string, { keywords }: HighlightKeywordsOptions): string;
}
export {};
