import { Component } from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {MatIconButton} from '@angular/material/button';
import {Footer} from '../footer/footer';

@Component({
  imports: [
    MatSidenavContent,
    MatSidenavContainer,
    MatSidenav,
    MatToolbar,
    MatIcon,
    LanguageSwitcher,
    MatIconButton,
    Footer
  ],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {}
