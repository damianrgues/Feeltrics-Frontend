import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import metric from "./../lib/metric-service";
import Slider from 'react-input-slider';

export class MetricCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.oneMetric.name,
            description: props.oneMetric.description,
            value: props.oneMetric.value,
            id: props.oneMetric._id
        }
    }

    submitUpdatedMetric= () => {
        const { id, description, value } = this.state;
        metric.updateMetricById(id, { description, value })
            .then((updatedMetric) => this.getAllMetrics() )
    }

    updateSlider = (event) => {
        this.setState({ value: event.target.value})
    }

    
    render() {
        return (
             <div className="metric-container-card" key={this.state.id}>
                <h2>{this.state.name}</h2>
                <p>{this.state.description}</p>

                <h3><span></span>{this.state.value} / 10</h3>
                <form onSubmit={this.submitUpdatedMetric}>
                    <input type="range" min="1" max="10" defaultValue={this.state.value} step="1" onChange={this.updateSlider}/>
                    <button className='button' type="submit">Update</button>
                </form>


                <Link to={`/metric/name/${this.state.name}`}><button className= 'button' type="submit" >See this metric</button></Link>
                {/* <Link className= '' type="submit" to="/">Done</Link> */}

                <button className="button" onClick={ () => this.props.handleDelete(this.state.id) }>Delete</button>

              </div>
        )
    }
}

export default MetricCard
