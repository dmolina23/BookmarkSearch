chrome.omnibox.onInputEntered.addListener((text, suggest) => {
    chrome.bookmarks.search(text, (results) => {
        let suggestions = [];
        for (let i = 0; i < results.length; i++) {
            chrome.omnibox.setDefaultSuggestion({
                content: results[i].url,
                description: results[i].title
            })
            suggestions.push({
                content: results[i].ulr,
                description: results[i].title
            });
            suggest(suggestions);
        }
    })
})