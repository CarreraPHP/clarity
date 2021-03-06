/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@clr/icons/shapes/essential-shapes';
import '@clr/icons/shapes/technology-shapes';
import '@clr/icons/shapes/travel-shapes';
import '@clr/icons/shapes/social-shapes';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'clr-tree-view-dynamic-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './tree-view-dynamic.html',
})
export class TreeViewDynamicDemo {
  @Input('clrDemoShowHalf') showHalf: boolean = true;

  rootDirectory: any[] = [
    {
      name: 'Applications',
      icon: 'folder',
      expanded: true,
      files: [
        { icon: 'calendar', name: 'Calendar', active: true },
        { icon: 'line-chart', name: 'Charts', active: false },
        { icon: 'dashboard', name: 'Dashboard', active: false },
        { icon: 'map', name: 'Maps', active: false },
        { icon: 'email', name: 'Mail', active: false },
        { icon: 'bar-chart', name: 'Numbers', active: false },
        { icon: 'tasks', name: 'Tasks', active: false },
        { icon: 'flag', name: 'Reminders', active: false },
      ],
    },
    {
      name: 'Files',
      icon: 'folder',
      expanded: false,
      files: [
        { icon: 'file', name: 'Cover Letter.doc', active: false },
        { icon: 'file', name: 'Flyer.doc', active: false },
        { icon: 'file', name: 'Resume.doc', active: false },
        { icon: 'file', name: 'Notes.txt', active: false },
      ],
    },
    {
      name: 'Images',
      icon: 'folder',
      expanded: false,
      files: [
        { icon: 'image', name: 'Screenshot.png', active: false },
        { icon: 'image', name: 'Pic.png', active: false },
        { icon: 'image', name: 'Portfolio.jpg', active: false },
      ],
    },
  ];

  openFile(directoryName: string, fileName: string): void {
    for (const dir of this.rootDirectory) {
      if (directoryName === dir.name) {
        this.setFileActive(dir, fileName);
      } else {
        for (const file of dir.files) {
          file.active = false;
        }
      }
    }
  }

  setFileActive(dir: any, fileName: string) {
    for (const file of dir.files) {
      if (file.name === fileName) {
        file.active = true;
      } else {
        file.active = false;
      }
    }
  }
}
