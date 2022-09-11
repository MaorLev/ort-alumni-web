import {
  ComponentRef,
  ElementRef,
  OnInit,
  Renderer2,
  TemplateRef,
} from '@angular/core';
/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, Input, ViewContainerRef } from '@angular/core';
import { CardDeck, CardDeckTemplateContext, CardDeckTypes } from './card.types';
import { UiDeckCardComponent } from './ui-deck-card.component';

@Directive({
  selector: '[ortDeck]',
})
export class DeckDirective implements OnInit {
  @Input('ortDeckFor') cards: CardDeck[];
  @Input('ortDeckPrimary') primaryTemp: TemplateRef<CardDeckTemplateContext>;
  constructor(
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {}
  ngOnInit(): void {
    const parentNode = this.renderer.parentNode(this.hostElement.nativeElement);

    const wrapper = this.renderer.createElement('div');

    this.renderer.addClass(wrapper, 'card');

    this.renderer.insertBefore(
      parentNode,
      wrapper,
      this.hostElement.nativeElement
    );
    this.renderer.removeChild(parentNode, this.hostElement.nativeElement);
    this.renderer.appendChild(wrapper, this.hostElement.nativeElement);

    const cardTemplateComponent: ComponentRef<UiDeckCardComponent> =
      this.viewContainer.createComponent(UiDeckCardComponent);

    this.cards.forEach((card) => {
      this.renderTamplate(card, cardTemplateComponent);
    });
  }
  renderTamplate(
    card: CardDeck,
    templateComponent: ComponentRef<UiDeckCardComponent>
  ) {
    switch (card.type) {
      case CardDeckTypes.Plain:
        this.viewContainer.createEmbeddedView(
          templateComponent.instance.plainCardTemplate,
          { $implicit: card }
        );
        break;
      case CardDeckTypes.Primary:
        this.viewContainer.createEmbeddedView(
          this.primaryTemp || templateComponent.instance.primaryCardTemplate,
          { $implicit: card }
        );
    }
  }
}
