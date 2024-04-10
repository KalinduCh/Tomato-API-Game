import { FunctionComponent } from "react";
import TableCell1 from "./TableCell1";
import TableCell from "./TableCell";
import "./Content.css";

const Content: FunctionComponent = () => {
  return (
    <div className="content2">
      <div className="column2">
        <div className="table-cell14">
          <div className="text-and-supporting-text11">
            <div className="text16">Username</div>
            <div className="supporting-text11">
              Brings all your news into one place
            </div>
          </div>
        </div>
        <div className="table-cell15">
          <div className="text-and-supporting-text12">
            <div className="text17">Mark Zen</div>
            <div className="supporting-text12">
              Brings all your news into one place
            </div>
          </div>
        </div>
        <div className="table-cell16">
          <div className="text-and-supporting-text13">
            <div className="text18">MC Tooder</div>
            <div className="supporting-text13">
              Brings all your news into one place
            </div>
          </div>
        </div>
        <div className="table-cell17">
          <div className="text-and-supporting-text14">
            <div className="text19">Use 003</div>
            <div className="supporting-text14">
              Brings all your news into one place
            </div>
          </div>
        </div>
        <div className="table-cell18">
          <div className="text-and-supporting-text15">
            <div className="text20">Mani Stream</div>
            <div className="supporting-text15">
              Brings all your news into one place
            </div>
          </div>
        </div>
        <div className="table-cell19">
          <div className="text-and-supporting-text16">
            <div className="text21">Esport X</div>
            <div className="supporting-text16">
              Brings all your news into one place
            </div>
          </div>
        </div>
      </div>
      <div className="column3">
        <TableCell1 text="Points" />
        <div className="table-cell20">
          <div className="text-and-supporting-text17">
            <div className="text22">212</div>
            <div className="supporting-text17">
              Brings all your news into one place
            </div>
          </div>
        </div>
        <div className="table-cell21">
          <div className="text-and-supporting-text18">
            <div className="text23">180</div>
            <div className="supporting-text18">
              Brings all your news into one place
            </div>
          </div>
        </div>
        <div className="table-cell22">
          <div className="text-and-supporting-text19">
            <div className="text24">160</div>
            <div className="supporting-text19">
              Brings all your news into one place
            </div>
          </div>
        </div>
        <div className="table-cell23">
          <div className="text-and-supporting-text20">
            <div className="text25">100</div>
            <div className="supporting-text20">
              Brings all your news into one place
            </div>
          </div>
        </div>
        <div className="table-cell24">
          <div className="text-and-supporting-text21">
            <div className="text26">80</div>
            <div className="supporting-text21">
              Brings all your news into one place
            </div>
          </div>
        </div>
      </div>
      <div className="column4">
        <TableCell1 text="Position" propMinWidth="110px" />
        <TableCell text="01" />
        <TableCell
          text="02"
          propBackgroundImage="url('/avatar1@3x.png')"
          propMinWidth="37px"
        />
        <TableCell
          text="03"
          propBackgroundImage="url('/avatar2@3x.png')"
          propMinWidth="37px"
        />
        <div className="table-cell25">
          <div className="text-and-supporting-text22">
            <div className="text27">04</div>
            <div className="supporting-text22">
              Brings all your news into one place
            </div>
          </div>
        </div>
        <div className="table-cell26">
          <div className="text-and-supporting-text23">
            <div className="text28">05</div>
            <div className="supporting-text23">
              Brings all your news into one place
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
