import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyService } from 'src/app/service/party.service';

@Component({
  selector: 'app-party-form',
  templateUrl: './party-form.component.html',
  styleUrls: ['./party-form.component.css']
})
export class PartyFormComponent {
  partyForm!: FormGroup;
  partyId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private partyService: PartyService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.partyForm = this.fb.group({
      name: ['', Validators.required],
      company_name: ['', Validators.required],
      mobile_no: ['', Validators.required]
    });

    // this.partyId = +this.route.snapshot.paramMap.get('id')!;
    // if (this.partyId) {
    //   this.partyService.getPartyById(this.partyId).subscribe(party => {
    //     this.partyForm.patchValue(party);
    //   });
    // }
    const id = this.route.snapshot.paramMap.get('id');
  if (id !== null) {
  this.partyId = +id;
  if (this.partyId) {
    this.partyService.getPartyById(this.partyId).subscribe(party => {
      this.partyForm.patchValue(party);
    });
  }
}
  }

  onSubmit(): void {
    if (this.partyForm.valid) {
      if (this.partyId) {
        this.partyService.updateParty(this.partyId, this.partyForm.value).subscribe(() => {
          this.router.navigate(['/party-list']);
        });
      } else {
        this.partyService.addParty(this.partyForm.value).subscribe(() => {
          this.router.navigate(['/party-list']);
        });
      }
    }
  }

}
