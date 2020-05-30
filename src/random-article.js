
import React, {useState, useEffect} from 'react'
import './App.css';

function RandomArticle() {

  useEffect(()=>{

    let randomNumber = Math.floor(Math.random() * 3);
    let articleTypes = [2,3,5]
    console.log(randomNumber);
       
    const fetchItems = async () => {

     
        const data = await fetch(`https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-${articleTypes[randomNumber]}.json`);

        const Article = await data.json();
  
        setArticlesTitle(Article.title);
        setArticlesHeading(Article.body[0].model.text);
        setArticles(Article.body);
       
    }
    fetchItems();
    
},[]);

const [articles, setArticles] = useState([]);
const [articleTitle, setArticlesTitle] = useState('');
const [articleHeading, setArticlesHeading] = useState('');



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
