import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
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
  partyForm!: FormGroup;
  parties: Party[] = [];
  displayedColumns: string[] = ['name', 'location', 'actions'];

  constructor(private fb: FormBuilder, private partyService: PartyService) {}

  ngOnInit(): void {
    this.partyForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    });
    this.loadParties();
  }

  loadParties(): void {
    this.partyService.getParties().subscribe(parties => {
      this.parties = parties;
    });
  }

  onAddParty(): void {
    if (this.partyForm.valid) {
      this.partyService.addParty(this.partyForm.value).subscribe(party => {
        this.parties.push(party);
        this.partyForm.reset();
      });
    }
  }

  onEditParty(party: Party): void {
    // Implement edit functionality
  }

  onDeleteParty(id: number): void {
    this.partyService.deleteParty(id).subscribe(() => {
      this.parties = this.parties.filter(p => p.id !== id);
    });
  }

}
