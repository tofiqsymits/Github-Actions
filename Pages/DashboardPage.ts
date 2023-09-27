import { Page, Locator } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;

    /* ======== ALL GLOBAL URLS ======== */
    private Dashboard_Page_URL: string;

    /* ======== ALL GLOBAL LOCATORS ======== */

    // all locators related to Numeric Stats
    TotalApplicants_numericStats_count: Locator;
    TotalQualified_numericStats_count: Locator;
    TotalQualified_numericStats_percentage: Locator;
    TotalUnqualified_numericStats_count: Locator;
    TotalUnqualified_numericStats_percentage: Locator;
    TotalHired_numericStats_count: Locator;
    TotalAppliedAndHired_numericStats_percentage: Locator;
    TotalQualifiedAndHired_numericStats_percentage: Locator;
    TotalRejected_numericStats_count: Locator;
    TotalRejected_numericStats_percentage: Locator;

    // all locators related to "Applicant Sources" Chart
    _ApplicantSources_AllDays_chart_icon: Locator;
    _ApplicantSources_AllDays_dropdown: Locator;
    _ApplicantSources_TotalApplicants_count: Locator;

    // all locators related to "Qualified vs Unqualified" Chart
    _QvsUnq_BySource_icon: Locator;
    _QvsUnq_BySource_TotalApplicants_count: Locator;
    _QvsUnq_BySource_TotalQualifiedApplicants_cp: Locator;
    _QvsUnq_BySource_TotalUnqualifiedApplicants_cp: Locator;
    _QvsUnq_BySource_AllDays_dropdown: Locator;
    _QvsUnq_ByDay_icon: Locator;
    _QvsUnq_ByDay_TotalApplicants_count: Locator;
    _QvsUnq_ByDay_TotalQualifiedApplicants_cp: Locator;
    _QvsUnq_ByDay_TotalUnqualifiedApplicants_cp: Locator;
    _QvsUnq_ByDay_AllSources_dropdown: Locator;

    // all locators related to "Qualified vs Unqualified" Chart
    _ApplicantsHired_BySource_icon: Locator;
    _ApplicantsHired_BySource_TotalApplicants_count: Locator;
    _ApplicantsHired_BySource_AllDays_dropdown: Locator;
    _ApplicantsHired_ByDay_icon: Locator;
    _ApplicantsHired_ByDay_TotalApplicants_count: Locator;
    _ApplicantsHired_ByDay_AllSources_dropdown: Locator;

    // all locators related to "Applicants by day" Chart
    _ApplicantsByDay_AllSources_TotalApplicants: Locator;
    _ApplicantsByDay_AllSources_dropdown: Locator;

    // all locators related to "Qualified vs Unqualified By Time Frame" Chart
    _FilterBy_dropdown: Locator;
    _AllDays_QvsUnqTime_dropdown: Locator;
    _ByDays_TotalApplicants_QvsUnqTime_count: Locator;
    _ByDays_Qualified_QvsUnqTime_cp: Locator;
    _ByDays_Unqualified_QvsUnqTime_cp: Locator;
    _AllSources_QvsUnqTime_dropdown: Locator;
    _BySources_TotalApplicants_QvsUnqTime_count: Locator;
    _BySources_Qualified_QvsUnqTime_cp: Locator;
    _BySources_Unqualified_QvsUnqTime_cp: Locator;

    constructor(page: Page) {
        this.page = page;

        /* ======== ALL GLOBAL URLS ======== */
        this.Dashboard_Page_URL = "admin/dashboard";

        /* ======== ALL GLOBAL LOCATORS ======== */

        // all locators related to Numeric Stats
        this.TotalApplicants_numericStats_count = page.locator("#totalApplications");
        this.TotalQualified_numericStats_count = page.locator("#totalQualified");
        this.TotalQualified_numericStats_percentage = page.locator("#total-qualified-percentage");
        this.TotalUnqualified_numericStats_count = page.locator("#totalUnQualified");
        this.TotalUnqualified_numericStats_percentage = page.locator("#total-unqualified-percentage");
        this.TotalHired_numericStats_count = page.locator("#totalHired");
        this.TotalAppliedAndHired_numericStats_percentage = page.locator("#total-hired-percentage");
        this.TotalQualifiedAndHired_numericStats_percentage = page.locator("#total-hired-q-percentage");
        this.TotalRejected_numericStats_count = page.locator("#totalOffered");
        this.TotalRejected_numericStats_percentage = page.locator("#total-rejected-percentage");

        // all locators related to "Applicant Sources" Chart
        this._ApplicantSources_AllDays_chart_icon = page.locator("#profile-tab");
        this._ApplicantSources_AllDays_dropdown = page.locator("#day_dropdown_total");
        this._ApplicantSources_TotalApplicants_count = page.locator("#total_source_count");

        // all locators related to "Qualified vs Unqualified" Chart
        this._QvsUnq_BySource_icon = page.locator("#home-tab-2");
        this._QvsUnq_BySource_TotalApplicants_count = page.locator("#total_qualify_count_by_source");
        this._QvsUnq_BySource_TotalQualifiedApplicants_cp = page.locator("#qualified_by_source");
        this._QvsUnq_BySource_TotalUnqualifiedApplicants_cp = page.locator("#unqualified_by_source");
        this._QvsUnq_BySource_AllDays_dropdown = page.locator("#day_dropdown");
        this._QvsUnq_ByDay_icon = page.locator("#profile-tab-2");
        this._QvsUnq_ByDay_TotalApplicants_count = page.locator("#total_qualify_count_by_day");
        this._QvsUnq_ByDay_TotalQualifiedApplicants_cp = page.locator("#qualified_by_source2");
        this._QvsUnq_ByDay_TotalUnqualifiedApplicants_cp = page.locator("#unqualified_by_source2");
        this._QvsUnq_ByDay_AllSources_dropdown = page.locator("#source_dropdown");

        // all locators related to "Qualified vs Unqualified" Chart
        this._ApplicantsHired_BySource_icon = page.locator("#home-tab-3");
        this._ApplicantsHired_BySource_TotalApplicants_count = page.locator("#total_hired_counts");
        this._ApplicantsHired_BySource_AllDays_dropdown = page.locator("#hired_dropdown_source_chart");
        this._ApplicantsHired_ByDay_icon = page.locator("#profile-tab-3");
        this._ApplicantsHired_ByDay_TotalApplicants_count = page.locator("#total_hired_count");
        this._ApplicantsHired_ByDay_AllSources_dropdown = page.locator("#hired_dropdown_day_chart");

        // all locators related to "Applicants by day" Chart
        this._ApplicantsByDay_AllSources_TotalApplicants = page.locator("#total_applicant_count");
        this._ApplicantsByDay_AllSources_dropdown = page.locator("#source_dropdown_day_chart");

        // all locators related to "Qualified vs Unqualified By Time Frame" Chart
        this._FilterBy_dropdown = page.locator(".dropdown_type");
        this._AllDays_QvsUnqTime_dropdown = page.locator("#days_dropdown");
        this._ByDays_TotalApplicants_QvsUnqTime_count = page.locator("#total_qualify_count_by_day_hourly");
        this._ByDays_Qualified_QvsUnqTime_cp = page.locator("#qualified_hourly");
        this._ByDays_Unqualified_QvsUnqTime_cp = page.locator("#unqualified_hourly");
        this._AllSources_QvsUnqTime_dropdown = page.locator("#sources_dropdown");
        this._BySources_TotalApplicants_QvsUnqTime_count = page.locator("#total_qualify_count_by_source_hourly");
        this._BySources_Qualified_QvsUnqTime_cp = page.locator("#qualified_hourly_source");
        this._BySources_Unqualified_QvsUnqTime_cp = page.locator("#unqualified_hourly_source");
    }

    /*                                          ========== ALL ACTIONS ==========                                          */

    // this function will navigate to Dashboard Page
    async Navigate_to_Dashboard_Page() {
        await this.page.goto(this.Dashboard_Page_URL, { waitUntil: "networkidle" });
    }

    // this function will take two values as parameters given, then calculate their percentage and return it in string value
    async Calculate_Percentage_str(VALUE_1: number, VALUE_2: number) {
        const Calculated_Percentage_int: number = (VALUE_1 / VALUE_2) * 100;
        const calculatedPercentage_str: string = "(" + parseFloat(`${Calculated_Percentage_int}`).toFixed(2) + "%)";
        return { calculatedPercentage_str };
    }

    // this function is only helpful in splitting Total Count and Percentages
    async split_count_and_percentage(INPUT_VALUE: string) {
        // [TOTAL_COUNT, PERCENTAGE] <-- this is an Javascript concept of array destructuring
        const [total_count, percentage]: string[] = INPUT_VALUE.split(" ");
        return { TOTAL_COUNT: +(total_count), PERCENTAGE: percentage };
    }

    // this function will check whether "By Source" or "By Day" is given (as parameter) and it will return the dropdown values of specific given parameter in string ARRAY
    async get_dropdown_values(BY: Locator) {
        await this.page.waitForTimeout(1000);
        const allValues = await BY.innerText();
        const linesArray = allValues.split('\n');
        if (linesArray.some(value => value.includes("All Days"))) {
            const filteredArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
            return { filteredArray };
        }
        else {
            const filteredArray = ["Facebook", "Google", "Indeed", "LinkedIn", "Website Chat", "Direct", "Walk-In"];
            return { filteredArray };
        }
    }

    // this function will take LOCATOR (as paramert) and pass it to above function, and it will also return multiple unique values also
    /* async Random_multipleUnique_selection(BY_MEANS_OF: Locator) {
         const ARRAY: string[] = (await this.get_dropdown_values(BY_MEANS_OF)).filteredArray;
         const multipleTimes_action: number = Math.floor(Math.random() * ARRAY.length);
         let multipleUniqueValues: string[] = [];
         while (multipleUniqueValues.length < multipleTimes_action) {
             const randomIndex: number = Math.floor(Math.random() * ARRAY.length);
             const randomValues: string = ARRAY[randomIndex];
             if (!multipleUniqueValues.includes(randomValues)) {
                 multipleUniqueValues.push(randomValues);
             }
             else {
                 continue;
             }
         }       //  end of While loop
         return { multipleUniqueValues };
     }
     */

    // this function will take any value (as parameter) and it will return randomly generated value which will not be equals to 0
    /* async randomly_generated_value(INPUT_VALUE: any) {
        let RANDOMLY_GENERATED_NUMBER: number = Math.floor(Math.random() * INPUT_VALUE.length);
        // below condition will make sure to have randomly generated number not equals to 0
        while (RANDOMLY_GENERATED_NUMBER === 0) {
            RANDOMLY_GENERATED_NUMBER = Math.floor(Math.random() * INPUT_VALUE.length);
        }
        return { RANDOMLY_GENERATED_NUMBER };
    }
    */

}