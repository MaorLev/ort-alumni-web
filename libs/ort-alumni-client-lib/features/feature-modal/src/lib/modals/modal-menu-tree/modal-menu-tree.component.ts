import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilesNodeInterface } from '@features/feature-expansion-panel-node';
import { MenuDataModal } from './modal-menu.interfaces';

@Component({
  template: `
    <section class="modal-menu">
      <div id="modal-container">
        <header class="header-modal">
          <div class="close-modal">
            <ort-button #close_dialog className="btn-close" mat-dialog-close>
            </ort-button>
          </div>
          <div class="logo" mat-dialog-close routerLink="/main/home">
            <img src="assets/images/header_modal.png" alt="ort medium logo" />
          </div>
        </header>
        <div class="container">
          <div mat-dialog-content>
            <ort-feature-expansion-panel-node
              [dateSource]="data.dataSource"
              (routeClicked)="closeDialog()"
            ></ort-feature-expansion-panel-node>
          </div>
        </div>
        <footer class="footer">
          <div class="items">
            <div class="item static">
              גישה מהירה
              <ort-icon class="item static icon" className=".mat-icon"
                >navigate_before</ort-icon
              >
            </div>

            <div *ngFor="let link of data.quickLinks" class="item link">
              <button
                [routerLink]="link.routeTo"
                mat-dialog-close
                class="btn-link"
              >
                {{ link.label }}
              </button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  `,
  styles: [
    `
      @use 'fonts' as font;
      ::ng-deep {
        .menu-bgmp {
          .mat-dialog-container {
            margin: 0;
            padding: 0;
          }
        }
      }
      .modal-menu {
        position: relative;
        background-color: var(--black);
        height: 100%;
        width: 100%;
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          background: url('/assets/images/modal_menu.jpg') no-repeat center
            center / cover;
          opacity: 0.1;
          width: inherit;
          height: inherit;
          z-index: 0;
        }
        #modal-container {
          position: absolute;
          height: 100%;
          width: 100%;

          .header-modal {
            width: inherit;
            height: 10vh;
            display: flex;
            justify-content: space-between;
            padding: 3rem 5rem;
          }

          .container {
            width: inherit;
            height: 80vh;
            padding: 0;
          }

          .footer {
            width: inherit;
            height: 10vh;
            .items {
              height: 100%;
              width: 100%;
              padding: 2rem 6rem;
              border-top: 1px solid var(--accent-a-color);
              display: flex;
              flex-wrap: nowrap;
              overflow: hidden;
              color: var(--white);

              .item {
                align-self: center;
                height: 100%;
                display: block;
                padding: 0.5rem 1.5rem;
                @include font.h-2;
                font-weight: 600;
                &.static {
                  color: var(--accent-a-stronger-color);
                  display: flex;
                  flex-wrap: nowrap;
                }
              }
            }
          }
        }
      }
      img {
        opacity: 0.5;
        &:hover {
          opacity: 0.6;
          cursor: pointer;
        }
      }

      button {
        cursor: pointer;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalMenuTreeComponent {
  constructor(
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: MenuDataModal
  ) {}

  closeDialog() {
    this.matDialog.closeAll();
  }
}
