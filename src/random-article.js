
import React, {useState, useEffect} from 'react'
import './App.css';

function RandomArticle() {

  //Set up hooks for randomly generated article
  const [articles, setArticles] = useState([]);
  const [articleTitle, setArticlesTitle] = useState('');
  const [articleHeading, setArticlesHeading] = useState('');

  useEffect(()=>{
    //Generate a random number
    let randomNumber = Math.floor(Math.random() * 3);
    let articleTypes = [2,3,5]
    
    //Make request to get the article depending on the randomly generated number
    const fetchItems = async () => {
     
        const data = await fetch(`https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-${articleTypes[randomNumber]}.json`);

        //Collect Json
        const Article = await data.json();

        //Set content for randomly generated article
        setArticlesTitle(Article.title);
        setArticlesHeading(Article.body[0].model.text);
        setArticles(Article.body);
       
    }

    //Call function
    fetchItems();
    
},[]);

  //Display the randomly generated article content
  return (
    <div>
        <h1>Generate a random Article</h1>

        <h1>{articleTitle}</h1>
            <h2>{articleHeading}</h2>

            {articles.map(article => 

          
                <b>{article.type == 'paragraph' ? 
                <p>{article.model.text}</p>
                
                : <img src={article.model.url} alt={article.model.altText} width={article.model.width} height={article.model.height}></img>
                
                }
                </b>
            )}
        
    </div>
  );
}

export default RandomArticle;
