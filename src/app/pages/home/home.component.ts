import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw234i: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Juan Kerber')
    this.meta.addTags([
      {
        property: 'og:title',
        content: "Juan Kerber's Porfolio",
      },
    ])
  }
}