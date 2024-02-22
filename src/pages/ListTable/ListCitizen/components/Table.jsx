import React from "react";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  function descFunc(e) {
    var textStat = e.target.textContent;
    var wrapCard = document.getElementsByClassName("wrapCard");
    var tabCont = document.getElementsByClassName("tabCont");
    if (textStat == "Rescued") {
      for (var i = 0; i < wrapCard.length; i += 1) {
        wrapCard[i].style.display = 'block';
      }
      for (var i = 0; i < tabCont.length; i += 1) {
        tabCont[i].style.filter = "blur(4px)";
      }
    }
  }
  function BackDesc() {
    var wrapCard = document.getElementsByClassName("wrapCard");
    var tabCont = document.getElementsByClassName("tabCont");

    for (var i = 0; i < wrapCard.length; i += 1) {
      wrapCard[i].style.display = 'none';
    }
    for (var i = 0; i < tabCont.length; i += 1) {
      tabCont[i].style.filter = "none";
    }

  }

  return (
    <div className="table-wrapper">
      <span className="table-container tabCont">
        <table className="table">
          <thead>
            <tr>
              <th className="mx-auto expand">NAME</th>
              <th className="mx-auto expand">SITUATION OF DOG</th>
              <th className="mx-auto  ">RESCUER STATUS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              const statusText =
                row.status.charAt(0).toUpperCase() + row.status.slice(1);
              return (
                <tr>
                  <td className="expand">{row.page}</td>
                  <td className="expand">{row.description}</td>
                  <td className="fit">
                    <span className={`label LCword label-${row.status}`} onClick={descFunc}>
                      {row.statuse}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </span>
      <div className="wrapCard animate pop ">
        <div className="overlayCard">
          <div className="overlay-contentCard animate slide-left delay-2">
            <h1 className="animateh1 slide-left popCard delay-4">Missed Dog</h1>
          </div>
          <div className="image-contentCard animate slide delay-5" />
          <div className="dotsCard animate">
            <div className="animate slide-up delay-6" />
            <div className="animate slide-up delay-7" />
            <div className="animate slide-up delay-8" />
          </div>
        </div>
        <div className="textCard">
          <p><img className="insetCard" src="https://cdn.greatnonprofits.org/images/uploads/organizations/IMG_8368.jpg" alt="" /></p>
          <br></br>
          <center><h1 className="ColH1">Missed Dog</h1> </center>
          <p><span className="textCardLi"><h5>Rescued By :&#160;</h5>Humane Animal Society (HAS)</span>
            <span className="textCardLi"><h5>Rescued From : &#160;</h5>Karumbukadi Street 5</span>
            <span className="textCardLi"><h5>Rescued To: &#160;</h5>Sanjay K</span>
            <span className="textCardLi"><h5>Rescued Date: &#160;</h5>10/05/23</span>
            <span className="textCardLi"><h5>Rescued Time: &#160;</h5>10:20:30</span>
            <br></br>
            <h1 className="ColH1">QUERIES</h1>
            <span className="textCardLi"><h5>I ? &#160;</h5>
            </span>
            <div className='row row-cols-md-1 '>
              <span className='cit2Col'><input type='radio' name='DogSit' style={{ borderColor: 'green' }} className="RadioColor" value='CantGetADog' />&#160;&#160;Didn't get a Dog</span>
              <span className='cit2Col'><input type='radio' name='DogSit' style={{ borderColor: 'green' }} className="RadioColor" value='GetADog' />&#160;&#160;Got a Dog</span>
            </div>
          </p>
          <span className="textCardLi mb-2" ><h5>Detailed Explanation :&#160;</h5>
          </span>
          <textarea rows={4} cols={44} name="queries" style={{ color: "grey", borderRadius:"10px", padding:"10px" }} > </textarea>
          <center className="mt-3">
            <input type="button" className="button-17" onClick={BackDesc} value={"Back"}></input> <input type="button" className="button-17" value={"Submit"} onClick={BackDesc}></input>
          </center>
        </div>
      </div>
    </div>
  );
};
