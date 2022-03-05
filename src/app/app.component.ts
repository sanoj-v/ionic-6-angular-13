import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuService } from './service/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public pageList = [
    {
      iconName: 'home', displayText: 'Home', expanded: false, hasChild: true,
      subOptions: [
        { iconName: 'home', displayText: 'Home', url: '/home' },
        { iconName: 'basketball', displayText: 'Home 2', url: '/home2' },
        { iconName: 'briefcase', displayText: 'Home 3', url: '/home3' }
      ]
    },
    {
      iconName: 'list', displayText: 'Product List', expanded: false, hasChild: true,
      subOptions: [
        { iconName: 'card', displayText: 'Search List', url: '/list' },
        { iconName: 'cash', displayText: 'Search List2', url: '/list1' },
        { iconName: 'clock', displayText: 'Infinite Scroll List', url: '/list2' },
        { iconName: 'clock', displayText: 'Product Card List', url: '/list3' },
        { iconName: 'clock', displayText: 'News List', url: '/list4' },
      ]
    },
    {
      iconName: 'flame', displayText: 'Animation List', expanded: false, hasChild: true,
      subOptions: [
        { iconName: 'flask', displayText: 'Flip List ', url: '/animation-list1' },
        { iconName: 'headset', displayText: 'Slide List', url: '/animation-list2' },
        { iconName: 'infinite', displayText: 'Slide Left List', url: '/animation-list3' },
        { iconName: 'leaf', displayText: 'Rotate List', url: '/animation-list4' },
      ]
    },
    {
      iconName: 'radio-button-on', displayText: 'Sliding，reorder,Select', expanded: false, hasChild: true,
      subOptions: [
        { iconName: 'map', displayText: 'Sliding List', url: '/list-sliding' },
        { iconName: 'magnet', displayText: 'Reorder List', url: '/list-reorder' },
        { iconName: 'moon', displayText: 'Checkbox List', url: '/list-checkbox' },
        { iconName: 'microphone', displayText: 'Radio Group List', url: '/list-radio' },
      ]
    },
    {
      iconName: 'flower', displayText: 'Progress', expanded: false, hasChild: true,
      subOptions: [
        { iconName: 'link', displayText: 'Infinite Scroll', url: '/loading2' },
        { iconName: 'move', displayText: 'Top Loading', url: '/loading3' },
        { iconName: 'play', displayText: 'Card Skeleton List', url: '/loading5' },
        { iconName: 'play-circle', displayText: 'Profile Skeleton List', url: '/loading6' }
      ]
    }
  ];

  isUserLoggedIn$: Observable<boolean> = of(false);
  constructor(
    private _menuService: MenuService) {

    console.log("=======>", "Component Loaded");
  }

  ngOnInit() {
    this.isUserLoggedIn$ = this._menuService.getState;
  }

}
