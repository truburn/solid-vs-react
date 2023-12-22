import type { Meta, StoryObj } from "@storybook/react";
import { DateTime as DateTimeComponent } from "./DateTime";

const meta: Meta<typeof DateTimeComponent> = {
  component: DateTimeComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DateTime: Story = {
  args: {
    date: "2023-12-22T14:43:00.000Z",
  },
  render: (args) => {
    const { date } = args;
    const formats = [
      undefined,
      "LL/dd/yy",
      "LL/dd/yy hh:mm a",
      "cccc, LLLL d, yyyy",
    ];

    return (
      <div>
        {formats.map((format, idx) => (
          <p key={idx}>
            <strong style={{ fontFamily: "monospace" }}>
              {format ?? "undefined"}
            </strong>
            <br />
            <DateTimeComponent date={date} format={format} />
          </p>
        ))}
      </div>
    );
  },
};
