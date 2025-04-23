import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar"

const topAgents = [
  { name: "Sarah Johnson", policies: 145, revenue: 287500 },
  { name: "Michael Chen", policies: 132, revenue: 264000 },
  { name: "Emily Rodriguez", policies: 128, revenue: 256000 },
  { name: "David Kim", policies: 120, revenue: 240000 },
  { name: "Lisa Patel", policies: 115, revenue: 230000 },
]

export function ExpiringSoon() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expiring soon</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {topAgents.map((agent, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={`/avatars/agent-${index + 1}.png`} alt={agent.name} />
                <AvatarFallback>{agent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{agent.name}</p>
                <p className="text-sm text-muted-foreground">
                  {agent.policies} policies | ${agent.revenue.toLocaleString()}
                </p>
              </div>
              <div className="ml-auto font-medium">#{index + 1}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

