import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
 

  ngOnInit(): void {

    window.addEventListener('scroll', () => {
      const image = document.getElementById('img');
      if (image) {
        const imagePosition = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (imagePosition < windowHeight) {
          image.classList.add('img3');
        } else {
          image.classList.remove('img3');
        }
      }
    })

    window.addEventListener('scroll', () => {
      const image = document.getElementById('imge2');
      if (image) {
        const imagePosition = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (imagePosition < windowHeight) {
          image.classList.add('img3');
        } else {
          image.classList.remove('img3');
        }
      }
    })

    let mybutton = document.getElementById("myBtn");
                
              
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton!.style.display = "block";
      } else {
        mybutton!.style.display = "none";
      }
    }
    
   
   

  }
   topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

