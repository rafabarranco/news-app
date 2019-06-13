import React, {Component, Fragment} from 'react';
import HeaderComponent from './components/Header';
import NewsListComponent from './components/NewsList';
import FormComponent from './components/Form';

class App extends Component {
  state = {
    news: [],
  };

  componentDidMount(){
    this.setApiNews();
  };

  setApiNews = async ( category = 'general' ) => {
    const newsApiUrl = `https://newsapi.org/v2/top-headlines?country=nz&category=${category}&apiKey=1e6f631842f64558ae00818245e7a3ec`;
    const response = await fetch(newsApiUrl);
    const news = await response.json();
    this.setState({
      news: news.articles,
    });
  };

  render() { 
    return (
      <Fragment >
        <HeaderComponent 
          title='News'
        />
        <div className="container white contenedor-noticias">
          <FormComponent 
            setApiNews={this.setApiNews}
          />
          <NewsListComponent 
            news={this.state.news}
          />
        </div>
      </Fragment>
    );
  };
};
 
export default App;