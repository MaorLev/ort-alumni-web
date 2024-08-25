import { Component, ChangeDetectionStrategy, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

          <ort-button
            iconColor="accent"
            className="custom sz-3"
            iconName="account_circle"
            [routerLink]="PathName"
            (click) = "closeDialog()"
            >
          </ort-button>
        </header>
        <div class="node-container">
          <div mat-dialog-content>
            <ort-feature-expansion-tree
              [dateSource]="data.dataSource"
              (routeClicked)="closeDialog()"
            ></ort-feature-expansion-tree>
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

            <ng-container *ngFor="let link of data.quickLinks">
              <div class="item link">
                <button
                  [routerLink]="link.routeTo"
                  mat-dialog-close
                  class="btn-link"
                >
                  {{ link.label }}
                </button>

              </div>
              <div class="item sprt">
-
              </div>
            </ng-container>
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
          min-width: 100vw;
          .mat-dialog-container {
            margin: 0;
            padding: 0;
          }
        }
      }
      .hgroup-1 {
        display: flex;
        justify-content: space-between;
        // padding: 3rem 5rem;

        .account-icon {
          width: 5rem;
          height: 5rem;
          font-size: 5rem;
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
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 5fr 1fr;

          .header-modal {
            width: inherit;
            height: inherit;
            display: flex;
            justify-content: space-between;
            padding: 3rem 5rem;
            .close-modal {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
          }

          .node-container {
            width: inherit;
            height: inherit;
            overflow: hidden;
            padding: 1rem;
          }

          .footer {
            width: inherit;
            height: inherit;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            flex-wrap: wrap;
            padding: 3rem 0;
            -webkit-box-shadow: inset 0px 40px 8px -10px rgba(0, 0, 0, 0.21);
            box-shadow: inset 0px 40px 8px -10px rgba(0, 0, 0, 0.21);

            .items {
              padding: 2rem 4rem;
              border-top: 1px solid var(--accent-a-color);
              display: flex;
              flex-wrap: wrap;
              color: var(--white);

              .item {
                display: lockb;
                padding: 0.5rem 1rem;
                @include font.h-2;
                font-weight: 600;
                &.static {
                  color: var(--accent-a-stronger-color);
                  display: flex;
                  flex-wrap: wrap;
                }
              }
              .sprt{
                &:last-child {
      display:none;
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
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalMenuTreeComponent implements OnInit {
  pathName: string;

  get PathName(): string {
    return this.pathName;
  }
  set PathName(name: string) {
    this.pathName = name;
  }
  constructor(
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: MenuDataModal
  ) {}
  ngOnInit(): void {
    this.PathName = this.data.accountRoute ? this.data.accountRoute : "";
  }

  closeDialog() {
    this.matDialog.closeAll();
  }
}
