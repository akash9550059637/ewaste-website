import React, { useState } from 'react';

function EducationalContent() {
    // State to manage which article is currently selected
    const [selectedArticle, setSelectedArticle] = useState(null);

    // Sample educational articles (you can replace with your own content)
    const articles = [
        {
            id: 1,
            title: 'Understanding E-Waste',
            content:
                'E-waste, or electronic waste, refers to discarded electronic devices. It includes computers, smartphones, and more. Proper disposal is essential to protect the environment and human health.',
        },
        {
            id: 2,
            title: 'Harmful Components',
            content:
                'E-waste contains hazardous materials like lead, mercury, and cadmium. When not disposed of correctly, these toxins can leach into soil and water, posing serious health risks.',
        },
        {
            id: 3,
            title: 'Recycling Benefits',
            content:
                'Recycling e-waste conserves resources, reduces landfill waste, and minimizes the need for mining new materials. It also allows for the recovery of valuable metals.',
        },
    ];

    // Function to handle article click and display pop-up content
    const handleArticleClick = (articleId) => {
        const article = articles.find((article) => article.id === articleId);
        if (article) {
            setSelectedArticle(article);
        }
    };

    // Function to close the pop-up
    const closePopup = () => {
        setSelectedArticle(null);
    };

    return (
        <section className="educational-content space">
            <h2>Educational Content</h2>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <button onClick={() => handleArticleClick(article.id)}>{article.title}</button>
                    </li>
                ))}
            </ul>
            {selectedArticle && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={closePopup}>
                            &#x2716;
                        </button>
                        <h3>{selectedArticle.title}</h3>
                        <p>{selectedArticle.content}</p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default EducationalContent;
