import React, { Component } from 'react';
import { Card, List } from 'antd';
import './action.css';

export default class ActionComponent extends Component {
    render(){
        return (
            <Card title="What Can We Do?" id="action">
                <p>Please call and write to your local officials and let them know how you feel about this development.</p>
                <h1>City of Minneapolis Officials</h1>
                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={cityData}
                    renderItem={item => (
                        <List.Item>
                            <Card className="hoodCard" title={item.name}>
                                <span style={{"display":"block"}}>{item.position}</span>
                                <span style={{"display":"block"}}>&nbsp;</span>
                                <span style={{"display":"block"}}>{item.phone_number}</span>
                                {item.email ? <span><span style={{"display":"block"}}>&nbsp;</span><span style={{"display":"block"}}>{item.email}</span></span> : null}
                                <span style={{"display":"block"}}>&nbsp;</span>
                                <span style={{"display":"block"}}>{item.address1}</span>
                                <span style={{"display":"block"}}>{item.address2}</span>
                                {item.url ? <span><span style={{"display":"block"}}>&nbsp;</span><span style={{"display":"block"}}><a target="_blank" href={item.url}>Website</a></span></span> : null}
                                {item.fcbk ? <span><span style={{"display":"block"}}>&nbsp;</span><span style={{"display":"block"}}><a target="_blank" href={item.fcbk}>Facebook</a></span></span> : null}
                            </Card>
                        </List.Item>
                    )}
                />
                <h1>Northeast Park Neighborhood Association</h1>
                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={nepnaData}
                    renderItem={item => (
                        <List.Item>
                            <Card className="hoodCard" title={item.name}>
                                <span style={{"display":"block"}}>{item.position}</span>
                                <span style={{"display":"block"}}>&nbsp;</span>
                                <span style={{"display":"block"}}>{item.phone_number}</span>
                                {item.email ? <span><span style={{"display":"block"}}>&nbsp;</span><span style={{"display":"block"}}>{item.email}</span></span> : null}
                                <span style={{"display":"block"}}>&nbsp;</span>
                                <span style={{"display":"block"}}>{item.address1}</span>
                                <span style={{"display":"block"}}>{item.address2}</span>
                                {item.url ? <span><span style={{"display":"block"}}>&nbsp;</span><span style={{"display":"block"}}><a target="_blank" href={item.url}>Website</a></span></span> : null}
                                {item.fcbk ? <span><span style={{"display":"block"}}>&nbsp;</span><span style={{"display":"block"}}><a target="_blank" href={item.fcbk}>Facebook</a></span></span> : null}
                            </Card>
                        </List.Item>
                    )}
                />
                <h1>Windom Park Neighborhood Association</h1>
                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={wpnaData}
                    renderItem={item => (
                        <List.Item>
                            <Card className="hoodCard" title={item.name}>
                                <span style={{"display":"block"}}>{item.position}</span>
                                <span style={{"display":"block"}}>&nbsp;</span>
                                <span style={{"display":"block"}}>{item.phone_number}</span>
                                {item.email ? <span><span style={{"display":"block"}}>&nbsp;</span><span style={{"display":"block"}}>{item.email}</span></span> : null}
                                <span style={{"display":"block"}}>&nbsp;</span>
                                <span style={{"display":"block"}}>{item.address1}</span>
                                <span style={{"display":"block"}}>{item.address2}</span>
                                {item.url ? <span><span style={{"display":"block"}}>&nbsp;</span><span style={{"display":"block"}}><a target="_blank" href={item.url}>Website</a></span></span> : null}
                                {item.fcbk ? <span><span style={{"display":"block"}}>&nbsp;</span><span style={{"display":"block"}}><a target="_blank" href={item.fcbk}>Facebook</a></span></span> : null}
                            </Card>
                        </List.Item>
                    )}
                />
                <h1>Logan Park Neighborhood Association</h1>
                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={lpnaData}
                    renderItem={item => (
                        <List.Item>
                            <Card className="hoodCard" title={item.name}>
                                <span style={{"display":"block"}}>{item.position}</span>
                                <span style={{"display":"block"}}>&nbsp;</span>
                                <span style={{"display":"block"}}>{item.phone_number}</span>
                                {item.email ? <span><span style={{"display":"block"}}>&nbsp;</span><span style={{"display":"block"}}>{item.email}</span></span> : null}
                                <span style={{"display":"block"}}>&nbsp;</span>
                                <span style={{"display":"block"}}>{item.address1}</span>
                                <span style={{"display":"block"}}>{item.address2}</span>
                                {item.url ? <span><span style={{"display":"block"}}>&nbsp;</span><span style={{"display":"block"}}><a target="_blank" href={item.url}>Website</a></span></span> : null}
                                {item.fcbk ? <span><span style={{"display":"block"}}>&nbsp;</span><span style={{"display":"block"}}><a target="_blank" href={item.fcbk}>Facebook</a></span></span> : null}
                            </Card>
                        </List.Item>
                    )}
                />
            </Card>
        )
    }
}

const cityData = [
  {
    "name": "Peter Crandall",
    "position": "Senior City Planner",
    "phone_number": "612-673-2247",
    "email": "peter.crandall@minneapolismn.gov",
    "address1": "250 S 4th St, Room 300",
    "address2": "Minneapolis, MN 55415"
  },
  {
    "name": "Planning Commission",
    "position": "Public Service Center",
    "phone_number": "612-673-3710",
    "url": "http://www.ci.minneapolis.mn.us/PlanningCommission/index.htm",
    "address1": "250 S 4th St, Room 300",
    "address2": "Minneapolis, MN 55415"
  },
  {
    "name": "Kevin Reich",
    "position": "Ward 1 City Council Person",
    "phone_number": "612-673-2201",
    "email": "kevin.reich@minneapolismn.gov",
    "fcbk": "https://www.facebook.com/KevinReichWard1/?ref=br_rs",
    "address1": "350 S 5th St, Room 307",
    "address2": "Minneapolis, MN 55415"
  },
  {
    "name": "Jacob Frey",
    "position": "Mayor",
    "phone_number": "612-673-2100",
    "url": "http://www.ci.minneapolis.mn.us/mayor/contact/index.htm",
    "address1": "350 S 5th St, Room 331",
    "address2": "Minneapolis, MN 55415"
  }
];

const nepnaData = [
  {
    "name": "Kate Kottenbrock",
    "position": "NEPNA Board Chair",
    "phone_number": "612-781-6620",
    "email": "info@northeastpark.org",
    "url": "https://www.northeastpark.org/",
    "fbck": "https://www.facebook.com/Northeast-Park-Neighborhood-Association-182654927348/",
    "address1": "P. O. Box 18012",
    "address2": "Minneapolis, MN 55418"
  }
];

const wpnaData = [
  {
    "name": "Zachary Wefel",
    "position": "President",
    "phone_number": "(612) 788-2192",
    "email": "info@windompark.org",
    "url": "https://windompark.org/",
    "address1": "1845 Stinson Parkway NE, Ste 201 & 203",
    "address2": "Minneapolis, MN 55418"
  }
];

const lpnaData = [
  {
    "name": "Paula Allan",
    "position": "President",
    "phone_number": "612-516-5762",
    "email": "loganparkna@aol.com",
    "url": "https://loganparkneighborhood.org/",
    "fcbk": "https://www.facebook.com/LoganParkNeighborhood/",
    "address1": "1330 Van Buren Street NE",
    "address2": "Minneapolis, MN 55413"
  }
];


