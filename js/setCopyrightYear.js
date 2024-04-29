function setCopyrightYear(begin_year) {
    const current_year = new Date().getFullYear();
    
    if (begin_year == current_year) {
        return document.write(`${current_year}`)
    } else if (begin_year < current_year) {
        return document.write(`${begin_year} - ${current_year}`)
    };

    return document.write(`${begin_year}`);
};