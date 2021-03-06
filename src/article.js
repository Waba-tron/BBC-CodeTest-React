import React, {useState, useEffect} from 'react'

export default function Article({match}) {
    //use articles 2, 3, 5

    const [articles, setArticles] = useState([]);
    const [articleTitle, setArticlesTitle] = useState('');
    const [articleHeading, setArticlesHeading] = useState('');

    useEffect(()=>{
       //Use hook to make request to article depending on url parameter
        const fetchItems = async () => {
            const data = await fetch(`https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-${match.params.id}.json`);

            //Collect Json
            const Article = await data.json();

            //Set the content of the articles
            setArticlesTitle(Article.title);
            setArticlesHeading(Article.body[0].model.text);
            setArticles(Article.body);
           
        }

        //calls function
        fetchItems();
    },[]);

    //Display article content
    return (
        <div>
            
            <h1>{articleTitle}</h1>
            <h2>{articleHeading}</h2>
           
            {articles.map(article => 
            
                <b>{article.type == 'paragraph' ? 
                <p>{article.model.text}</p>
                : 
                <img src={article.model.url} alt={article.model.altText} width={article.model.width} height={article.model.height}></img>
                
                }
                </b>
            )}
        </div>
    )
}
