import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  moviesCienciaFiccion = [
    {image: '../../assets/images/avatar.jpg',
     alt: 'Avatar la película'
    },
    {image: '../../assets/images/galaxia.jpg',
     alt: 'La guerra de las galaxias película'
    },
    {image: '../../assets/images/transformers.jpg',
     alt: 'Transformers la película'
    },
    {image: '../../assets/images/jurasic.jpg',
     alt: 'Jurasic Park la película'
    },
    {image: '../../assets/images/reyleon.jpg',
     alt: 'Rey Leon la película'
    }
  ]
}
