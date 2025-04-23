import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table";
import { Badge } from "@/components/atoms/badge";

const recentClaims = [
  {
    id: "CL-001",
    customer: "John Doe",
    type: "Auto",
    amount: 1500,
    status: "pending",
  },
  {
    id: "CL-002",
    customer: "Jane Smith",
    type: "Home",
    amount: 5000,
    status: "delivered",
  },
  {
    id: "CL-003",
    customer: "Bob Johnson",
    type: "Life",
    amount: 100000,
    status: "default",
  },
  {
    id: "CL-004",
    customer: "Alice Brown",
    type: "Health",
    amount: 2000,
    status: "delivered",
  },
  {
    id: "CL-005",
    customer: "Charlie Davis",
    type: "Auto",
    amount: 3000,
    status: "delivered",
  },
];

export function RecentSubscriptions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Subscriptions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentClaims.map((claim) => (
              <TableRow key={claim.id}>
                <TableCell>{claim.id}</TableCell>
                <TableCell>{claim.customer}</TableCell>
                <TableCell>{claim.type}</TableCell>
                <TableCell>${claim.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant="default">{claim.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
