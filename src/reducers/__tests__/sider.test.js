import siderReducer from "../sider"
import { changeCollapse } from "actions/siderActions"

describe("#sider test", () => {
    test("init sider", () => {
        expect(siderReducer(undefined, {})).toEqual({ isCollapsed: true })
    })

    test("change sider collapse", () => {
        expect(
            siderReducer(undefined, changeCollapse(false)).isCollapsed
        ).toEqual(false)
    })
})
