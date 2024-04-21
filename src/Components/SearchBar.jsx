import React from "react";
import './SearchBar.css';
import { SearchJob } from "./SearchJob";
export const SearchBar=()=>{
return(
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="First slide" />
        <div className="carousel-caption d-none d-md-block">
          <SearchJob/>
          </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://media.istockphoto.com/id/1481370620/photo/portrait-of-two-creative-colleagues-using-laptop-to-discuss-work-project-at-office-young.jpg?s=1024x1024&w=is&k=20&c=LjR1oOh0Fjf8F3XWe5wbM-tfScLmQJCS66W89eYq3E0=" alt="Second slide" />
        <div className="carousel-caption d-none d-md-block">
          <SearchJob/>
          </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://media.istockphoto.com/id/1485546309/photo/abstract-image-of-businessman-walking-in-vr-environment.jpg?s=1024x1024&w=is&k=20&c=U0eqhkyo7ymfiVTx5FCLa0LwJiDX8UZi8e8Ti0QumyE=" alt="Third slide" />
      
        <div className="carousel-caption d-none d-md-block">
          <SearchJob/>
          </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
    </div>
  </div>
)
}