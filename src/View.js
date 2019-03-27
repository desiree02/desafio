import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import './index.css';

class View extends Component {
  
  render() {
    var line1 = 
    { 
      x: ['00:00', '00:01'],
      y: [8,10 ],
      type: 'scatter',
      name: 'Linux Firefox Max Response Time',
      marker: {
        color: 'rgb(40, 116, 166)',
        size: 10                        
      },
      font: {
        color: 'rgb(40, 116, 166)'
      }
    };
  
    var line2 = 
    { 
      x: ['00:00', '00:01'],
      y: [8, 9],
      type: 'scatter',
      name: 'Mac Chrome Max Response Time',
      marker: {
        color: 'rgb(91, 44, 111)',
        size: 10                        
      },
      font: {
        color: 'rgb(91, 44, 111)'
      }     
    };
  
    var line3 = 
    { 
      x: ['00:00', '00:01'],
      y: [9, 8.2],
      type: 'scatter',
      name: 'Linux Chrome Max Response Time',
      marker: {
        color: 'rgb(17, 122, 101)',
        size: 10                        
      },
      font: {
        color: 'rgb(17, 122, 101)'
      }  
    };
  
    var line4 = 
    { 
      x: ['00:00', '00:01'],
      y: [8.4, 8.2],
      type: 'scatter',
      name: 'Mac Firefox Max Response Time',
      marker: {
        color: 'rgb(230, 126, 34)',
        size: 10                        
      },
      font: {
        color: 'rgb(230, 126, 34)'
      }  
    };
        
    var line5 = 
    { 
      x: ['00:00', '00:01'],
      y: [2.1, 3],
      type: 'scatter',
      name: 'Linux Chrome Min Response Time',
      marker: {
        color: 'rgb(46, 204, 113)',
        size: 10                        
      },
      font: {
        color: 'rgb(46, 204, 113)'
      }  
    };
  
    var line6 = 
    { 
      x: ['00:00', '00:01'],
      y: [2.1, 3.8],
      type: 'scatter',
      name: 'Linux Firefox Min Response Time',
      marker: {
        color: 'rgb(133, 193, 233)',
        size: 10                      
      },
      font: {
        color: 'rgb(133, 193, 233)'
      }  
    };
  
    var line7 = 
    { 
      x: ['00:00', '00:01'],
      y: [3, 2.2],
      type: 'scatter',
      name: 'Mac Chrome Min Response Time',
      marker: {
        color: 'rgb(175, 122, 197)',
        size: 10                     
      },
      font: {
        color: 'rgb(175, 122, 197)'
      }  
    };
  
    var line8 = 
    { 
      x: ['00:00', '00:01'],
      y: [3.8, 3],
      type: 'scatter',
      name: 'Mac Firefox Min Response Time',
      marker: {
        color: 'rgb(247, 220, 111)', 
        size: 10        
      },
      font: {
        color: 'rgb(247, 220, 111)'
      }  
    };

    var data = [line1, line2, line3, line4, line5, line6, line7, line8];
    var prop = {
      width: 1200, 
      height: 500,
      yaxis: {
        autorange: true,
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
      },
      legend: {
        font: {
          size: 15,
          family: 'source-code-pro',
        }
      }
    };

    return (
      <html>
        <link rel="stylesheet" href="style.css" type="text/css" media="screen"/>
          <body>
              <div className = "header">
                <p>
                  Desiree's Challenge
                </p>    
                <textarea readonly id = "info" name = "info" cols = "188" rows = "15" ></textarea>
                <Plot data = {data} layout = {prop}/>
                  <div class="footer">
                  
                    <button class="button button2" onclick="saveText();">GENERATE CHART</button> 
                  </div>
              </div>
            </body>
      </html>
    );
  }

 /* destroyClickedElement(event)
  {
    document.body.removeChild(event.target);
  }*/

  saveText()
  {
    
    var textArea = document.getElementById("info").value;
    var textFile = new Blob([textArea], {type:'text/plain'});
    var fileName = "data.xml";
  
    var downloadLink = document.createElement("a");
    downloadLink.download = fileName;
    downloadLink.innerHTML = "Download File";
    if (window.URL != null)
    {
      // Chrome allows the link to be clicked
      // without actually adding it to the DOM.
      downloadLink.href = window.URL.createObjectURL(textFile);
    }
    else
    {
      // Firefox requires the link to be added to the DOM
      // before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFile);
     /* downloadLink.onclick = destroyClickedElement;*/
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
  
    downloadLink.click();
  }
  
  
}

export default View;

