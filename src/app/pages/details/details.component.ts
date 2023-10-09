import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
	id:string | null = "0";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
		this.route.paramMap.subscribe( value =>
			this.id = value.get("id")
		)
	}

	// setvalues(id:string | null) {
	// 	this
	// }

}
