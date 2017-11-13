import { Component, OnInit } from '@angular/core';
import { TagService } from "../../services/tag.service";

@Component({
  selector: 'app-tags-manager',
  templateUrl: './tags-manager.component.html',
  styleUrls: ['./tags-manager.component.css']
})
export class TagsManagerComponent implements OnInit {

  constructor(private tagService:TagService) { }

  ngOnInit() {
    this.tagService.getTagGroups().subscribe((posts) => {
      console.log(posts)
    });
  }

}
