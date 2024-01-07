import { Component } from '@angular/core';

interface Item {
  name:string;
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  items: Item[] = [
    { name: 'R'},
    { name: 'Ra'},
    { name: 'Ram' },
    { name: 'Rama' },
  ];

searchResults: Item[] = [];

searchTerm:string = '';

onSearch(): void {
  this.searchResults = this.items.filter(item =>
    item.name.toLowerCase().includes(this.searchTerm.toLowerCase())  
  );
}
}