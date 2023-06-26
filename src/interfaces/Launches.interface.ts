export interface LaunchesInterface {
    flight_number: number
    mission_name: string
    upcoming: boolean
    launch_year: string
    launch_date_unix: number
    launch_date_utc: string
    launch_date_local: string
    is_tentative: boolean
    tentative_max_precision: string
    tbd: boolean
    launch_window: number
    launch_success: boolean
    details: string
    static_fire_date_utc: string
    static_fire_date_unix: number

}
