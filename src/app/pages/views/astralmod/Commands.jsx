import React, { Component } from 'react';
import CountUp from 'react-countup';
import './Commands.scss';

class Commands extends Component {
  render () {
    return (
      <div className='view-container'>
        <div className='commands-container center'>
          <div className='commands-text-header'>Most Commands Used in 2019</div>
          <br></br>

          <div className='commands-text-justbefore'>
            <span>Basically, who has nothing better to with their life than play with a bot with barely any non-moderation features?</span>
            <br></br>
            <span>The answer to that burning question is...</span>
          </div>

          <div className='commands-text-container'>
            <div className='commands-text-subtext'>
              <div>
                <span className='mention commands-mention commands-text-mention'>@Swing</span>
                <span className='commands-text-again'>(again!)</span>
              </div>
              <br></br>
              <b><CountUp end={218} delay={3.2} duration={1.6}></CountUp></b> commands used this year with AstralMod
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
                    <tr>
                      <td>
                        nick
                      </td>
                      <td>
                        63
                      </td>
                    </tr>

                    <tr>
                      <td>
                        find
                      </td>
                      <td>
                        53
                      </td>
                    </tr>

                    <tr>
                      <td>
                        pic
                      </td>
                      <td>
                        42
                      </td>
                    </tr>

                    <tr>
                      <td>
                        uinfo
                      </td>
                      <td>
                        17
                      </td>
                    </tr>

                    <tr>
                      <td>
                        pins
                      </td>
                      <td>
                        17
                      </td>
                    </tr>

                    <tr>
                      <td>
                        help
                      </td>
                      <td>
                        7
                      </td>
                    </tr>

                    <tr>
                      <td>
                        setunit
                      </td>
                      <td>
                        4
                      </td>
                    </tr>

                    <tr>
                      <td>
                        time
                      </td>
                      <td>
                        4
                      </td>
                    </tr>

                    <tr>
                      <td>
                        tr
                      </td>
                      <td>
                        4
                      </td>
                    </tr>

                    <tr>
                      <td>
                        settz
                      </td>
                      <td>
                        2
                      </td>
                    </tr>

                    <tr>
                      <td>
                        calc
                      </td>
                      <td>
                        2
                      </td>
                    </tr>

                    <tr>
                      <td>
                        ping
                      </td>
                      <td>
                        2
                      </td>
                    </tr>
                    
                    <tr>
                      <td>
                        setlocale
                      </td>
                      <td>
                        1
                      </td>
                    </tr>

                    <tr>
                      <td>
                        total
                      </td>
                      <td>
                        218
                      </td>
                    </tr>
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

export default Commands;