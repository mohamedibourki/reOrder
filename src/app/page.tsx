"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reorder } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([1, 2, 3, 4, 5])
  return (
    <main>
      <Reorder.Group values={items} onReorder={setItems}>
        {items.map((item, index) => (
          <Reorder.Item value={item} key={item}>
            <Card className="m-8">
              <CardHeader>
                <CardTitle>Item {index}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  hi i am mohamed and who are you
                </p>
              </CardContent>
            </Card>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </main>
  );
}
