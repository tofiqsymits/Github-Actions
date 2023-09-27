import { loginPage } from "./LoginPage"
import { NavigationPages } from './NavigationPages'
import { ApplicantPageTableview } from './ApplicantPageTableview'
import { ApplicantPageWorkflowView } from './ApplicantPageWorkflowView';
import { LandingPage } from './LandingPage'
import { WidgetHandle } from "./WidgetHandle"
import { Page } from "@playwright/test"
import { JobPage } from "./JobPage"
import { ApplicantCalendarPage } from "./ApplicantCalendarPage";
import { InterviewCalendarPage } from "./InterviewCalendarPage";
import { InboxesMailPage } from "../utils/InboxesMailPage";
import { DashboardPage } from "./DashboardPage";

export class POManager {

    _page: Page

    _loginpage: loginPage
    _navigationpage: NavigationPages
    _applicantpagetv: ApplicantPageTableview
    _applicantpagewv: ApplicantPageWorkflowView
    _landinpage: LandingPage
    _widgetHandle: WidgetHandle
    _jobpage: JobPage
    _applicantcalendarpage: ApplicantCalendarPage;
    _interviewcalendarpage: InterviewCalendarPage;
    _inboxesmailpage: InboxesMailPage;
    _dashboardpage: DashboardPage;

    constructor(page: Page) {
        this._page = page;
        this._loginpage = new loginPage(page);
        this._navigationpage = new NavigationPages(page);
        this._applicantpagetv = new ApplicantPageTableview(page);
        this._applicantpagewv = new ApplicantPageWorkflowView(page);
        this._landinpage = new LandingPage(page);
        this._widgetHandle = new WidgetHandle(page);
        this._jobpage = new JobPage(page);
        this._applicantcalendarpage = new ApplicantCalendarPage(page);
        this._interviewcalendarpage = new InterviewCalendarPage(page);
        this._inboxesmailpage = new InboxesMailPage(page);
        this._dashboardpage = new DashboardPage(page);
    }

}