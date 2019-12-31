import React, { Component } from 'react';
import CountUp from 'react-countup';
import './Commands.scss';
import CommandsData from './../../../constants/Commands';

class CommandsUser extends Component {
  constructor () {
    super();
    const data = CommandsData[window.user.id];
    if (!data) {
      return window.routeHandler();
    }
  }

  render () {
    const data = CommandsData[window.user.id];
    return (
      <div className='view-container'>
        <div className='commands-container center'>
          <div className='commands-text-header'>Your Command Usage in 2019</div>
          <br></br>

          <div className='commands-text-container'>
            <div className='commands-text-subtext'>
              <br></br>
              <b><CountUp end={data.total} delay={3.2} duration={1.6}></CountUp></b> commands used this year with AstralMod
              <br></br>
              <div className='detailed-command-usage'>
                <h2 className='detailed-command-usage-header'>Detailed Command Usage</h2>
                <table>
                  <thead>
                    <tr>
                      <th>
                        Command
                      </th>
                      <th>
                        Usage
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {Object.keys(data).sort((a, b) => data[b] - data[a]).map(a => (
                      <tr>
                        <td>
                          {a}
                        </td>

                        <td>
                          {data[a]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>      
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommandsUser;