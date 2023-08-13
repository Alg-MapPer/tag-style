type HighlightOptions = {
  links?: boolean;
  mentions?: boolean;
  hashtags?: boolean;
};

type HighlightKeywordsOptions = {
  keywords?: string[];
};

export class TagStyle {
  static highlight(text: string, { links = false, mentions = false, hashtags = false }: HighlightOptions) {
    const linkRegex = /((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
    const mentionRegex = /@(\w+)/g;
    const hashtagRegex = /#(\w+)/g;

    if (links) {
      text = text.replace(linkRegex, '<a class="tag-style-link" href="$1">$1</a>');
    }
    if (mentions) {
      text = text.replace(mentionRegex, '<span class="tag-style-mention">@$1</span>');
    }
    if (hashtags) {
      text = text.replace(hashtagRegex, '<span class="tag-style-hashtag">#$1</span>');
    }

    return text;
  }

  static highlightKeywords(text: string, { keywords = [] }: HighlightKeywordsOptions) {
    if (keywords.length < 1) return text;

    for (const keyword of keywords) {
      const keywordRegex = new RegExp(`\\b(${keyword})\\b`, 'gi');
      text = text.replace(keywordRegex, '<span class="tag-style-keyword">$1</span>');
    }

    return text;
  }
}