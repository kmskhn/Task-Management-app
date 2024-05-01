import { CustomPieChart } from "@/components/customPieChart";
import { Overview } from "@/components/overview";
import { Card, CardTitle } from "@/components/ui/card";

const placeholders = [
  {
    color: "#0088FE",
    name: "todo",
  },
  {
    color: "#00C49F",
    name: "done",
  },
  {
    color: "#FFBB28",
    name: "in progress",
  },
  {
    color: "#FF8042",
    name: "backlog",
  },
  {
    color: "#ff0000",
    name: "canceled",
  },
];

const InsightsPage = () => {
  return (
    <div className=" w-full ml-7">
      <div className="flex justify-end mr-[120px]">
        <ul>
          {placeholders.map((el) => {
            return (
              <li
                className="p-1 m-1 inline-block rounded"
                style={{ background: el.color }}
              >
                {el.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-2 content-center gap-2">

      


        <Card className="py-6 items-center px-5">
        <CardTitle className="mt-3 mb-10">
          Tasks per Month
        </CardTitle>
          <Overview />
        </Card>
        <Card className=" py-6 flex items-center">
          <CustomPieChart />
        </Card>
      </div>
    </div>
  );
};

export default InsightsPage;
