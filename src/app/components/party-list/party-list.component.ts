import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartyService } from 'src/app/service/party.service';

interface Party {
  id: number;
  name: string;
  location: string;
}

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {
  parties: any[] = [];

  constructor(private partyService: PartyService, public router: Router) {}

  ngOnInit(): void {
    this.partyService.getParties().subscribe(data => {
      this.parties = data;
    });
  }

  viewParty(id: number): void {
    this.router.navigate(['/party-form', id]);
  }

  deleteParty(id: number): void {
    this.partyService.deleteParty(id).subscribe(() => {
      this.parties = this.parties.filter(p => p.id !== id);
    });
  }

}
