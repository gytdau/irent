import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Property from './Property';
import NewsCard from './NewsCard';
import Chart from 'react-google-charts';
import Table from './Table';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class GeneralDetails extends Component {
    constructor(props) {
        super(props)
        let transactions_in = []
        let transactions_out = []
        for (let i = 0; i < 20; i++) {
            transactions_in.push({
                num: "ULSBIE2D" + getRandomInt(11111111, 99999999),
                status: "",
                person: (getRandomInt(1, 100) > 80 ? `/plumber${getRandomInt(1, 3)}.png` : "")
            })
        }
        for (let i = 0; i < 20; i++) {
            transactions_out.push({
                num: "ULSBIE2D" + getRandomInt(11111111, 99999999),
                status: "",
                person: (getRandomInt(1, 100) > 80 ? `/plumber${getRandomInt(2, 3)}.png` : "")
            })
        }
        console.log(transactions_in)
        this.state = {
            expanded: false,
            expanded2: false,
            plumbers: [
                {
                    name: "Mario Higgs",
                    image: "plumber1.jpeg"
                },
                {
                    name: "Richard McGill",
                    image: "plumber2.png"
                },
                {
                    name: "Ricardo O'Dwyer",
                    image: "plumber3.png"
                }
            ],
            transactions_in,
            transactions_out
        }
    }
    expand() {
        this.setState({
            expanded: !this.state.expanded
        })
    }
    expand2() {
        this.setState({
            expanded2: !this.state.expanded2
        })
    }
    render() {
        let details = null
        if (this.state.expanded) {
            details = <div className="card">
                <div className="card-body bg-success text-white">
                    <strong><i className="mdi mdi-check" /> Annual profit in good standing</strong>
                    <h3 className="normal-font">€5,344 Annual Profit</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <Chart
                                height={300}
                                chartType="ColumnChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Year', 'Tax', 'Repair', 'Mortgage'],
                                    ['2017', 3544, 1205, 30125],
                                    ['2018', 4500, 1205, 30100],
                                    ['2019', 6000, 7502, 29000],
                                ]}
                                options={{
                                    title: 'Expenses per year',
                                    chartArea: { width: '50%' },
                                    colors: ["#03101E", '#1C5693', "#007bff"],
                                    isStacked: true
                                }}
                                legendToggle
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <h1>13%</h1>
                                    <h5>Increase in expenditues</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <h1>2.3x</h1>
                                    <h5>Repair expenses change</h5>
                                </div>
                                <div className="col-md-6">
                                    <h1>€19,830</h1>
                                    <h5>Transactional volume</h5>
                                </div>
                                <div className="col-md-6">
                                    <h1>5/5</h1>
                                    <h5>Regulatory standards achieved</h5>
                                </div>
                            </div>
                        </div>
                        <div className="btn btn-outline-dark mt-4 ml-3"><i className="mdi mdi-file-document-box" /> Generate tax report</div>
                        <div className="btn btn-outline-dark mt-4 ml-3"><i className="mdi mdi-google-spreadsheet" /> Generate spreadsheet</div>
                        <div className="btn btn-outline-dark mt-4 ml-3"><i className="mdi mdi-clock" /> Compare</div>
                        <div className="btn btn-outline-dark mt-4 ml-3"><i className="mdi mdi-dots-horizontal" /></div>
                    </div>
                </div>

            </div>
        }
        let details2 = null
        if (this.state.expanded2) {
            details2 = <div className="card">
                <div className="card-body bg-success text-white">
                    <strong><i className="mdi mdi-check" /> Bank transactions processed</strong>
                    <h3 className="normal-font">413 Transactions</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Ingoing</h2>
                            <Table data={this.state.transactions_in} />
                        </div>
                        <div className="col-md-6">
                            <h2>Outgoing</h2>
                            <Table data={this.state.transactions_out} />
                        </div>
                        <div className="btn btn-outline-dark mt-4 ml-3"><i className="mdi mdi-file-document-box" /> Generate tax report</div>
                        <div className="btn btn-outline-dark mt-4 ml-3"><i className="mdi mdi-google-spreadsheet" /> Generate spreadsheet</div>
                        <div className="btn btn-outline-dark mt-4 ml-3"><i className="mdi mdi-clock" /> Compare</div>
                        <div className="btn btn-outline-dark mt-4 ml-3"><i className="mdi mdi-dots-horizontal" /></div>
                    </div>
                </div>

            </div>
        }
        return (
            <div>
                <Link to="/" className="btn btn-light"><i className="mdi mdi-chevron-left" />Back</Link>
                <h1>Mel's Portfolio</h1>
                <div className="container mt-4">
                    <div className="row clickable" onClick={this.expand2.bind(this)}>
                        <h2><i className="mdi mdi-bank" /> Ulster Bank Transactions <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                    {details2}
                    <div className="row clickable" onClick={this.expand.bind(this)}>
                        <h2><i className="mdi mdi-finance" /> Profitability <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                    {details}
                    <div className="row clickable">
                        <h2><i className="mdi mdi-folder-alert" /> Risk assesment <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                    <div className="row clickable">
                        <h2><i className="mdi mdi-clock" /> History <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                    <div className="row clickable">
                        <h2><i className="mdi mdi-currency-usd" /> Tax assesment <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                </div>

            </div>
        );
    }
}

export default GeneralDetails;
