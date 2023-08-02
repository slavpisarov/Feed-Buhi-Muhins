import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-emoji-display',
  template: `
    <div [innerHTML]="emojiHTML"></div>
  `
})
export class EmojiDisplayComponent {
  @Input() emojiUnicode: string | undefined;
  emojiHTML: SafeHtml | undefined;

  constructor(private domSanitizer: DomSanitizer) {
    this.updateEmoji();
  }

  ngOnChanges(): void {
    this.updateEmoji();
  }

  private updateEmoji(): void {
    const emojiHTML = `&#x${this.emojiUnicode};`;
    this.emojiHTML = this.domSanitizer.bypassSecurityTrustHtml(emojiHTML);
  }
}