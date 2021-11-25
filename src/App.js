import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import User from './components/User';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mesas: [
        { id: 0, rating: 4, title: 'Mesa 1', image: 'mesa01.jpg' },
        { id: 1, rating: 3, title: 'Mesa 2', image: 'mesa02.jpg' },
        { id: 2, rating: 5, title: 'Mesa 3', image: 'mesa03.jpg' },
        { id: 3, rating: 5, title: 'Mesa 4', image: 'mesa04.jpg' },
        { id: 4, rating: 5, title: 'Mesa 5', image: 'mesa05.jpg' },
      ],
      copyMesas: []
    };

    this.onSearch = this.onSearch.bind(this);
    this.addItem = this.addItem.bind(this);
    this.remove = this.remove.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  initMesas() {
    //this.setState({copyBooks: [...this.state.books]});
    this.setState((state, props) => ({
      copyMesas: [...state.mesas]
    }));
  }

  componentDidMount() {
    this.initMesas();
  }

  onSearch(query) {
    if (query === '') {
      this.setState({ copyMesas: [...this.state.mesas] });
    } else {

      const temp = [...this.state.mesas];
      var res = [];
      temp.forEach(item => {
        if (item.title.toLowerCase().indexOf(query) > -1) {
          res.push(item);
        }
      });

      this.setState({ copyMesas: [...res] });
    }
  }

  addItem(item) {
    var temp = [...this.state.mesas];
    const id = temp[temp.length - 1].id + 1;
    item['id'] = id;
    temp.push(item);
    this.setState({ mesas: [...temp] });
    this.initMesas();
  }

  remove(id) {
    var temp = [...this.state.mesas];
    const res = temp.filter(item => item.id !== id);
    this.setState({ mesas: [...res] });
    this.initMesas();
  }

  updateRating(item) {
    var temp = [...this.state.mesas];
    const index = temp.findIndex(x => x.id === item.id);
    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({ mesas: [...temp] });
    this.initMesas();
  }

  render() {
    return (
      <Router>
        <div className="container mt-5">
          <div className="btn-group">
            <Link to="/inicio" className="btn btn-dark">
            Inicio
            </Link>
            <Link to="/nosotros" className="btn btn-dark">
            Nosotros
            </Link>
            <Link to="/contacto" className="btn btn-dark">
            Contacto
            </Link>
            </div>
          </div>
          <hr />
        <Switch>
          <Route path="/nosotros/:id">
            <User />
          </Route>
          <Route path="/inicio" exact>
            <Inicio />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
        </Switch>
        
        <div className="app">

          <Menu title="Fleck Fries" onsearch={this.onSearch} onadd={this.addItem} />

          <h1 className="title1">LAS MEJORES PAPAS FRITAS DE LA CIUDAD.</h1>

          <h2 className="text1">Desde Holanda para México, las mejores papas fritas
            en la ciudad, con un toque mexicano. Con diferentes tipos de salsas para complementar
            el sabor único en este snack que está en boca de todos.</h2>

          <div className="image"><img alt=""src={'img/' + this.state.image} width="100%" /></div>

          <List className="list" items={this.state.copyMesas} onremove={this.remove} onupdaterating={this.updateRating} />
        </div>
      </Router>
    );
  }
}

export default App;
