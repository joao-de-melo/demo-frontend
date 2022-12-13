import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { MainPageComponent } from './main-page.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {GatherDataComponent} from '../../components/gather-data/gather-data.component';
import {ShowDataComponent} from '../../components/show-data/show-data.component';
import {ListSortService} from '../../services/list-sort.service';

describe('MainPageComponent', () => {
  let listSortService: ListSortService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        MainPageComponent,
        GatherDataComponent,
        ShowDataComponent
      ],
      providers: [
        ListSortService
      ]
    }).compileComponents();

    listSortService = TestBed.inject(ListSortService);
    httpTestingController = TestBed.inject(HttpTestingController);

  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the gather data and show data components', () => {
    const fixture = TestBed.createComponent(MainPageComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-gather-data')).toBeDefined();
    expect(compiled.querySelector('app-show-data')).toBeDefined();
  });

});
