import * as React from "react";
import * as api from "../api";
export interface IDashboardState { place: string; }
export interface IDashboardProps { }
export interface IPlace { place: string; }
export class Dashboard extends React.Component<IDashboardProps, IDashboardState> {

  constructor(props: IDashboardProps) {
    super(props);
    this.state = { place: "" };
  }

  public render(): JSX.Element {
    return <div id="dashboard">
      {this.state.place &&
        <label> How about {this.state.place}?</label>
      }
    </div>;
  }

  componentDidMount(): void {
    api.get("/api/Place").then((result: IPlace) => {
      this.setState({
        place: result.place
      });
    });
  }
}